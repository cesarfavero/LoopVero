# `injectTraceparent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/rpc-tracing.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/rpc-tracing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:224831-224835](../../../../../../../reference/runtime/host-main.cjs#L224831-L224835) | `FunctionDeclaration` | não | `header, span` |
| [evaluation:511864-511868](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511864-L511868) | `FunctionDeclaration` | não | `header, span` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224831-224835](../../../../../../../reference/runtime/host-main.cjs#L224831-L224835) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511864-511868](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511864-L511868) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:224831

Chamadas escritas diretamente neste corpo: `header.set`, `spanTraceparent`.

SHA-256 do trecho: `4bae9ae94397f0e70d1eed752a2ae57b9f6b3910611a3db3d3e66613d9eb565c`.

### evaluation:511864

Chamadas escritas diretamente neste corpo: `header.set`, `spanTraceparent`.

SHA-256 do trecho: `4bae9ae94397f0e70d1eed752a2ae57b9f6b3910611a3db3d3e66613d9eb565c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
