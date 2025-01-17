'use client';

import { Card, CardHeader, CardBody } from "@nextui-org/react";

export default function TestCard() {
  return (
    <Card>
      <CardHeader>
        <h3>Test Card</h3>
      </CardHeader>
      <CardBody>
        <p>Aquesta és una Card de prova de NextUI.</p>
      </CardBody>
    </Card>
  );
}