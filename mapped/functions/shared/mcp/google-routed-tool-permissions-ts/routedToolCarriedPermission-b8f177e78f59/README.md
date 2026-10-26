# `routedToolCarriedPermission`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/google-routed-tool-permissions.ts` · [README do módulo](../../../../../modules/shared/mcp/google-routed-tool-permissions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:687168-687181](../../../../../../reference/runtime/host-main.cjs#L687168-L687181) | `FunctionDeclaration` | não | `args` |
| [evaluation:579289-579302](../../../../../../reference/runtime/sand-eval-runner.cjs#L579289-L579302) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687168-687181](../../../../../../reference/runtime/host-main.cjs#L687168-L687181) | 4 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:579289-579302](../../../../../../reference/runtime/sand-eval-runner.cjs#L579289-L579302) | 4 | 1 | 0 | 4 | 0 | 0 |

### host:687168

Chamadas escritas diretamente neste corpo: `.some`, `args.isDisabled`, `routedToolCarry`, `sourceToolPermission`, `stricterDenial`.

Alvos de atribuição ou incremento: `strictest`.

SHA-256 do trecho: `b07fb81612d59674c1a75a9ba0ce8f18da33b99d523b14a99772c8e407e1fc9a`.

### evaluation:579289

Chamadas escritas diretamente neste corpo: `.some`, `args.isDisabled`, `routedToolCarry`, `sourceToolPermission`, `stricterDenial`.

Alvos de atribuição ou incremento: `strictest`.

SHA-256 do trecho: `b07fb81612d59674c1a75a9ba0ce8f18da33b99d523b14a99772c8e407e1fc9a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
