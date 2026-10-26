# `stableAutomationId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-id.ts` · [README do módulo](../../../../../modules/core/automations/automation-id-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505708-505718](../../../../../../reference/runtime/host-main.cjs#L505708-L505718) | `FunctionDeclaration` | não | `{   agentId,   localId }` |
| [evaluation:554500-554510](../../../../../../reference/runtime/sand-eval-runner.cjs#L554500-L554510) | `FunctionDeclaration` | não | `{   agentId,   localId }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505708-505718](../../../../../../reference/runtime/host-main.cjs#L505708-L505718) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554500-554510](../../../../../../reference/runtime/sand-eval-runner.cjs#L554500-L554510) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:505708

Chamadas escritas diretamente neste corpo: `.toString`, `Buffer.from`, `Number.parseInt`, `hex3.slice`, `sha256Hex`.

SHA-256 do trecho: `63a6897ee141af25b2435dfd924712facfc5c1716e848ac60d14941e0d421be1`.

### evaluation:554500

Chamadas escritas diretamente neste corpo: `.toString`, `Buffer.from`, `Number.parseInt`, `hex3.slice`, `sha256Hex3`.

SHA-256 do trecho: `52b62605b0d04bcad8c03c3aa02fdd6c691720f5ece16e446be77a3b5c0f02eb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
