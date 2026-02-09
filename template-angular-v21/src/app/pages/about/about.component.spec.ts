import { TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render BEM structure', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.about')).toBeTruthy();
    expect(compiled.querySelector('.about__title')).toBeTruthy();
    expect(compiled.querySelector('.about__text')).toBeTruthy();
  });
});
