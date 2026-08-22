import { Injectable, inject, PLATFORM_ID, DestroyRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Lenis from 'lenis';

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  private lenisInstance?: Lenis;
  private animationFrameId?: number;

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.destroy();
    });
  }

  /**
   * Initializes Lenis smooth scrolling if running in a supported browser environment.
   */
  init(options?: { duration?: number }): void {
    if (
      !isPlatformBrowser(this.platformId) ||
      typeof window === 'undefined' ||
      typeof window.matchMedia !== 'function' ||
      typeof requestAnimationFrame !== 'function' ||
      this.lenisInstance
    ) {
      return;
    }

    try {
      this.lenisInstance = new Lenis({
        duration: options?.duration ?? 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        gestureOrientation: 'vertical',
        smoothWheel: true,
      });

      const raf = (time: number) => {
        this.lenisInstance?.raf(time);
        this.animationFrameId = requestAnimationFrame(raf);
      };

      this.animationFrameId = requestAnimationFrame(raf);
    } catch {
      // Gracefully fallback if smooth scroll unsupported
    }
  }

  /**
   * Scrolls to a target element or position smoothly.
   */
  scrollTo(target: string | HTMLElement | number, options?: Parameters<Lenis['scrollTo']>[1]): void {
    if (this.lenisInstance) {
      this.lenisInstance.scrollTo(target, options);
    }
  }

  /**
   * Cleanly cancels animation frames and destroys the Lenis instance.
   */
  destroy(): void {
    if (this.animationFrameId && typeof cancelAnimationFrame === 'function') {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = undefined;
    }
    if (this.lenisInstance) {
      this.lenisInstance.destroy();
      this.lenisInstance = undefined;
    }
  }
}
