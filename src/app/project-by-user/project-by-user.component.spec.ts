import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectByUserComponent } from './project-by-user.component';

describe('ProjectByUserComponent', () => {
  let component: ProjectByUserComponent;
  let fixture: ComponentFixture<ProjectByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectByUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
