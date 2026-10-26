# `ShipmentReader.text`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/shipment-card.ts` · [README do módulo](../../../../../modules/shared/transcript/shipment-card-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:707003-707018](../../../../../../reference/runtime/host-main.cjs#L707003-L707018) | `method` | não | `path33, value, rule` |
| [evaluation:481149-481164](../../../../../../reference/runtime/sand-eval-runner.cjs#L481149-L481164) | `method` | não | `path33, value, rule` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707003-707018](../../../../../../reference/runtime/host-main.cjs#L707003-L707018) | 6 | 1 | 0 | 5 | 0 | 0 |
| [evaluation:481149-481164](../../../../../../reference/runtime/sand-eval-runner.cjs#L481149-L481164) | 6 | 1 | 0 | 5 | 0 | 0 |

### host:707003

Chamadas escritas diretamente neste corpo: `.trim`, `cardTextProblems`, `normalizeCardSpaces`, `text3.slice`, `this.error`, `value.trim`.

SHA-256 do trecho: `3d3de64c5a57fee90860685f7d46de2a66693907812a5e8ced0baa6738c4f1aa`.

### evaluation:481149

Chamadas escritas diretamente neste corpo: `.trim`, `cardTextProblems`, `normalizeCardSpaces`, `text3.slice`, `this.error`, `value.trim`.

SHA-256 do trecho: `3d3de64c5a57fee90860685f7d46de2a66693907812a5e8ced0baa6738c4f1aa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
