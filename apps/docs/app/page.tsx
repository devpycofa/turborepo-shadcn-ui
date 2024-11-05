import { Button } from "@repo/ui/components/ui/button";
import { Card, CardHeader, CardTitle } from "@repo/ui/components/ui/card";

export default function Page() {
  return (
    <main>
      <Button>Click me</Button>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
      </Card>
    </main>
  );
}
