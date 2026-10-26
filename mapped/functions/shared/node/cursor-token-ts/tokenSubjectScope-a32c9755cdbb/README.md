# `tokenSubjectScope`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-token.ts` · [README do módulo](../../../../../modules/shared/node/cursor-token-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:175730-175733](../../../../../../reference/runtime/host-main.cjs#L175730-L175733) | `FunctionDeclaration` | não | `accessToken` |
| [evaluation:511709-511712](../../../../../../reference/runtime/sand-eval-runner.cjs#L511709-L511712) | `FunctionDeclaration` | não | `accessToken` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175730-175733](../../../../../../reference/runtime/host-main.cjs#L175730-L175733) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:511709-511712](../../../../../../reference/runtime/sand-eval-runner.cjs#L511709-L511712) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:175730

Chamadas escritas diretamente neste corpo: `accountSubjectScope`, `parseJwtPayload`.

SHA-256 do trecho: `b239582040885db3b13775b53a708cdfaef64dd0bc28ea88d14e78a937d321b7`.

### evaluation:511709

Chamadas escritas diretamente neste corpo: `accountSubjectScope`, `parseJwtPayload`.

SHA-256 do trecho: `b239582040885db3b13775b53a708cdfaef64dd0bc28ea88d14e78a937d321b7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
