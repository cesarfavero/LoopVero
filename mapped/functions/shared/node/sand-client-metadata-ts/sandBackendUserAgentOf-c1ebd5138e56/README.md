# `sandBackendUserAgentOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/sand-client-metadata.ts` · [README do módulo](../../../../../modules/shared/node/sand-client-metadata-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:175865-175867](../../../../../../reference/runtime/host-main.cjs#L175865-L175867) | `FunctionDeclaration` | não | `identity` |
| [evaluation:511800-511802](../../../../../../reference/runtime/sand-eval-runner.cjs#L511800-L511802) | `FunctionDeclaration` | não | `identity2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175865-175867](../../../../../../reference/runtime/host-main.cjs#L175865-L175867) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511800-511802](../../../../../../reference/runtime/sand-eval-runner.cjs#L511800-L511802) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:175865

Chamadas escritas diretamente neste corpo: `userAgentPlatformOf`.

SHA-256 do trecho: `673580d61ac785f051ea8c5fa203eb3e7f85318d29f736452e290caeed36c21e`.

### evaluation:511800

Chamadas escritas diretamente neste corpo: `userAgentPlatformOf`.

SHA-256 do trecho: `98586ee6ddaab796abd712c2add93b17d5a7515a756cba7491ea0d24dddc1495`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
