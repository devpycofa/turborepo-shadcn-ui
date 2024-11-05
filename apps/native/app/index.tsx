"use dom";

import { Button } from "@repo/ui/components/ui/button";
import { Card, CardHeader, CardTitle } from "@repo/ui/components/ui/card";

const Page = () => {
  return (
    <div className="flex flex-1 justify-center items-center bg-red-500">
      <Button>Click me</Button>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Page;
