import React from "react";

const METRIC_PATTERN =
  /(\$[\d,.]+[KMB]\+?|₹[\d.]+L|\d[\d,]*K\+|\d+\+|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{4})/g;

export function highlightMetrics(text, accentColor) {
  if (!text) {
    return null;
  }

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = METRIC_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(
      <span
        key={`${match.index}-${match[0]}`}
        style={{ color: accentColor, fontWeight: 600 }}
      >
        {match[0]}
      </span>
    );

    lastIndex = METRIC_PATTERN.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length ? parts : text;
}
