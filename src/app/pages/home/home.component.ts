import { ChangeDetectionStrategy, Component, VERSION } from '@angular/core';
import {
  EDUCATION,
  GROWTH_AREAS,
  METRICS,
  PROFILE,
  ROLES,
  SECTIONS,
  SKILL_GROUPS,
} from '../../data/resume.data';
import { MetricStripComponent } from '../../components/metric-strip/metric-strip.component';
import { RoleCardComponent } from '../../components/role-card/role-card.component';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';
import { SiteRailComponent } from '../../components/site-rail/site-rail.component';
import { SkillGroupComponent } from '../../components/skill-group/skill-group.component';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SiteRailComponent,
    SectionHeadingComponent,
    MetricStripComponent,
    RoleCardComponent,
    SkillGroupComponent,
    RevealDirective,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly profile = PROFILE;
  readonly sections = SECTIONS;
  readonly metrics = METRICS;
  readonly roles = ROLES;
  readonly skillGroups = SKILL_GROUPS;
  readonly growthAreas = GROWTH_AREAS;
  readonly education = EDUCATION;
  readonly angularVersion = VERSION.major;
}
