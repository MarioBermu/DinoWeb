import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  cargar(archivos: string[]) {
    for (const archivo of archivos) {
      const script = this.renderer.createElement('script');
      this.renderer.setAttribute(script, 'src', `./assets/js/${archivo}.js`);
      this.renderer.setAttribute(script, 'async', 'true');
      this.renderer.appendChild(document.body, script);
    }
  }
}
