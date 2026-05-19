export interface CompetitorColumn {
  name:  string;
  /** Short description shown under the name */
  blurb: string;
}

export type Cell = boolean | 'partial' | string;

export interface ComparisonRow {
  feature: string;
  cells:   Cell[]; // index 0 = Nukipa, then competitors in column order
}

export interface ComparisonMatrixProps {
  competitors: CompetitorColumn[];
  rows:        ComparisonRow[];
  labels: {
    nukipa:       string;
    yes:          string;
    partial:      string;
    no:           string;
  };
}

export function ComparisonMatrix({ competitors, rows, labels }: ComparisonMatrixProps) {
  const cols = [{ name: labels.nukipa, blurb: '' }, ...competitors];

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-separate border-spacing-0 text-left">
        <thead>
          <tr>
            <th
              scope="col"
              className="sticky left-0 z-10 w-[34%] border-b border-[color:var(--border-default)] bg-[color:var(--surface-page)] py-5 pr-5 align-bottom text-[12px] font-medium tracking-[0.06em] uppercase text-[color:var(--text-muted)]"
            />
            {cols.map((col, idx) => (
              <th
                key={col.name}
                scope="col"
                className={`border-b border-[color:var(--border-default)] px-4 py-5 align-bottom text-[14px] ${
                  idx === 0
                    ? 'rounded-t-[14px] bg-[color:var(--surface-soft)] border-x border-[color:var(--brand-primary)]'
                    : ''
                }`}
              >
                <span
                  className={`block font-semibold tracking-tight ${
                    idx === 0
                      ? 'text-[color:var(--brand-primary)]'
                      : 'text-[color:var(--text-primary)]'
                  }`}
                >
                  {col.name}
                </span>
                {col.blurb && (
                  <span className="mt-1 block text-[12px] font-normal text-[color:var(--text-muted)]">
                    {col.blurb}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={row.feature}>
              <th
                scope="row"
                className="sticky left-0 z-10 border-b border-[color:var(--border-default)] bg-[color:var(--surface-page)] py-4 pr-5 align-top text-[15px] font-medium text-[color:var(--text-primary)]"
              >
                {row.feature}
              </th>
              {row.cells.map((cell, colIdx) => (
                <td
                  key={colIdx}
                  className={`border-b border-[color:var(--border-default)] px-4 py-4 align-top text-[14px] ${
                    colIdx === 0
                      ? 'bg-[color:var(--surface-soft)] border-x border-[color:var(--brand-primary)]'
                      : ''
                  } ${rowIdx === rows.length - 1 && colIdx === 0 ? 'rounded-b-[14px]' : ''}`}
                >
                  <CellMark
                    cell={cell}
                    emphasizeColumn={colIdx === 0}
                    labels={labels}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CellMark({
  cell,
  emphasizeColumn,
  labels
}: {
  cell:            Cell;
  emphasizeColumn: boolean;
  labels:          ComparisonMatrixProps['labels'];
}) {
  if (cell === true) {
    return (
      <span
        className={`inline-flex items-center gap-2 text-[15px] font-medium ${
          emphasizeColumn
            ? 'text-[color:var(--brand-primary)]'
            : 'text-[color:var(--text-primary)]'
        }`}
      >
        <CheckIcon /> {labels.yes}
      </span>
    );
  }
  if (cell === false) {
    return (
      <span className="inline-flex items-center gap-2 text-[15px] text-[color:var(--text-muted)]">
        <DashIcon /> {labels.no}
      </span>
    );
  }
  if (cell === 'partial') {
    return (
      <span className="inline-flex items-center gap-2 text-[15px] text-[color:var(--text-primary)]">
        <PartialIcon /> {labels.partial}
      </span>
    );
  }
  return (
    <span
      className={`text-[14px] leading-[1.5] ${
        emphasizeColumn
          ? 'text-[color:var(--text-primary)]'
          : 'text-[color:var(--text-secondary)]'
      }`}
    >
      {cell}
    </span>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M5 12h14" />
    </svg>
  );
}

function PartialIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none" />
    </svg>
  );
}
