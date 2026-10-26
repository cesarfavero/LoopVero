# `earliestAutomationNextRunAt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-file-format.ts` · [README do módulo](../../../../../modules/core/automations/automation-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716701-716711](../../../../../../reference/runtime/host-main.cjs#L716701-L716711) | `FunctionDeclaration` | não | `config2, timeZone` |
| [evaluation:627415-627425](../../../../../../reference/runtime/sand-eval-runner.cjs#L627415-L627425) | `FunctionDeclaration` | não | `config2, timeZone` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716701-716711](../../../../../../reference/runtime/host-main.cjs#L716701-L716711) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:627415-627425](../../../../../../reference/runtime/sand-eval-runner.cjs#L627415-L627425) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:716701

Chamadas escritas diretamente neste corpo: `automationAnchor`, `computeNextRunAt`, `triggerFiringSchedules`.

Alvos de atribuição ou incremento: `earliest`.

SHA-256 do trecho: `c5808af4674d2885c19bdd627da19d70d8354ad6c66583f7b1ead51549dc15eb`.

### evaluation:627415

Chamadas escritas diretamente neste corpo: `automationAnchor`, `computeNextRunAt`, `triggerFiringSchedules`.

Alvos de atribuição ou incremento: `earliest`.

SHA-256 do trecho: `c5808af4674d2885c19bdd627da19d70d8354ad6c66583f7b1ead51549dc15eb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
