/*
 * tesla-stats.component.ts
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Stat } from '../../models/stat.interface';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'tesla-stats',
    templateUrl: 'tesla-stats.component.html',
    styleUrls: ['tesla-stats.component.scss']
})
export class TeslaStatsComponent {
    @Input() stats: Stat[];
}
