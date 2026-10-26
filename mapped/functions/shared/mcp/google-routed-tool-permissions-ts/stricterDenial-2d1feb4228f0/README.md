# `stricterDenial`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/google-routed-tool-permissions.ts` · [README do módulo](../../../../../modules/shared/mcp/google-routed-tool-permissions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:687163-687167](../../../../../../reference/runtime/host-main.cjs#L687163-L687167) | `FunctionDeclaration` | não | `current2, next` |
| [evaluation:579284-579288](../../../../../../reference/runtime/sand-eval-runner.cjs#L579284-L579288) | `FunctionDeclaration` | não | `current2, next` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687163-687167](../../../../../../reference/runtime/host-main.cjs#L687163-L687167) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:579284-579288](../../../../../../reference/runtime/sand-eval-runner.cjs#L579284-L579288) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:687163

Chamadas escritas diretamente neste corpo: `restrictiveness`.

SHA-256 do trecho: `74177f76b5b6eedc2bec4198d5f46ed2d6199e4d90a878b476d534254c436a53`.

### evaluation:579284

Chamadas escritas diretamente neste corpo: `restrictiveness`.

SHA-256 do trecho: `74177f76b5b6eedc2bec4198d5f46ed2d6199e4d90a878b476d534254c436a53`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
