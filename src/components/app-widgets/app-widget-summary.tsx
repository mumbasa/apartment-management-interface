import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { AppWidgetSummaryProps } from "../../types/overview";
import { palette } from "../../theme/palette";
// ----------------------------------------------------------------------

export default function AppWidgetSummary({
  title,
  total,
  icon,
  color = palette.primary.main,
  sx,
  ...other
}: AppWidgetSummaryProps) {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
        ...sx,
      }}
      {...other}
    >
      {icon && <Box sx={{ width: 64, height: 64, color: color }}>{icon}</Box>}

      <Stack spacing={0.5}>
        <Typography variant="h4">{total}</Typography>

        <Typography variant="subtitle2" sx={{ color: "text.disabled" }}>
          {title}
        </Typography>
      </Stack>
    </Card>
  );
}
