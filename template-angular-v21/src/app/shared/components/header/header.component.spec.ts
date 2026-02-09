import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render BEM structure', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.navbar')).toBeTruthy();
    expect(compiled.querySelector('.navbar__logo')).toBeTruthy();
    expect(compiled.querySelector('.navbar__nav')).toBeTruthy();
  });

  it('should contain navigation links', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.navbar__link');
    expect(links.length).toBe(2);
    expect(links[0].textContent?.trim()).toBe('Home');
    expect(links[1].textContent?.trim()).toBe('About');
  });
});
