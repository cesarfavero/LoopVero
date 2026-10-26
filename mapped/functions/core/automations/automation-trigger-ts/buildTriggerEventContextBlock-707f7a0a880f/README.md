# `buildTriggerEventContextBlock`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:528229-528375](../../../../../../reference/runtime/sand-eval-runner.cjs#L528229-L528375) | `FunctionDeclaration` | não | `event` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528229-528375](../../../../../../reference/runtime/sand-eval-runner.cjs#L528229-L528375) | 42 | 0 | 0 | 9 | 0 | 0 |

### evaluation:528229

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `escapeEventText`.

SHA-256 do trecho: `886fd68a7f66accca4c34ccdb9a21bcc4a160f43e747c3f549dc309feebf130b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
