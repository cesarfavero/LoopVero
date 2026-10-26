# `sourceToolPermission`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/google-routed-tool-permissions.ts` · [README do módulo](../../../../../modules/shared/mcp/google-routed-tool-permissions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:687160-687162](../../../../../../reference/runtime/host-main.cjs#L687160-L687162) | `FunctionDeclaration` | não | `args, name18` |
| [evaluation:579281-579283](../../../../../../reference/runtime/sand-eval-runner.cjs#L579281-L579283) | `FunctionDeclaration` | não | `args, name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687160-687162](../../../../../../reference/runtime/host-main.cjs#L687160-L687162) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579281-579283](../../../../../../reference/runtime/sand-eval-runner.cjs#L579281-L579283) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:687160

Chamadas escritas diretamente neste corpo: `args.isDisabled`.

SHA-256 do trecho: `82a1cd2c3015c41ae0ca60a72afdc44c62d7d937fe5035605a9464a751dbcdf9`.

### evaluation:579281

Chamadas escritas diretamente neste corpo: `args.isDisabled`.

SHA-256 do trecho: `82a1cd2c3015c41ae0ca60a72afdc44c62d7d937fe5035605a9464a751dbcdf9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
