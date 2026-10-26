# `parseStoredTrigger`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716363-716372](../../../../../../reference/runtime/host-main.cjs#L716363-L716372) | `FunctionDeclaration` | não | `value` |
| [evaluation:528046-528055](../../../../../../reference/runtime/sand-eval-runner.cjs#L528046-L528055) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716363-716372](../../../../../../reference/runtime/host-main.cjs#L716363-L716372) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:528046-528055](../../../../../../reference/runtime/sand-eval-runner.cjs#L528046-L528055) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:716363

Chamadas escritas diretamente neste corpo: `Array.isArray`, `isUnknownRecord2`, `parseTriggerMember`, `parseTriggerMembers`, `triggerParseFailure`.

SHA-256 do trecho: `afe8f1e97f2cee9297937e415ba22661e7780bbd682d3928d5a9ea35d7f0334d`.

### evaluation:528046

Chamadas escritas diretamente neste corpo: `Array.isArray`, `isUnknownRecord2`, `parseTriggerMember`, `parseTriggerMembers`, `triggerParseFailure`.

SHA-256 do trecho: `afe8f1e97f2cee9297937e415ba22661e7780bbd682d3928d5a9ea35d7f0334d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
