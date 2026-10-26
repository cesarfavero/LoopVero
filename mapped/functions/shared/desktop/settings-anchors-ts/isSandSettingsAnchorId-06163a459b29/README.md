# `isSandSettingsAnchorId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/desktop/settings-anchors.ts` · [README do módulo](../../../../../modules/shared/desktop/settings-anchors-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:489316-489318](../../../../../../reference/runtime/host-main.cjs#L489316-L489318) | `FunctionDeclaration` | não | `value` |
| [evaluation:475444-475446](../../../../../../reference/runtime/sand-eval-runner.cjs#L475444-L475446) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489316-489318](../../../../../../reference/runtime/host-main.cjs#L489316-L489318) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475444-475446](../../../../../../reference/runtime/sand-eval-runner.cjs#L475444-L475446) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:489316

Chamadas escritas diretamente neste corpo: `ANCHOR_ID_SET.has`.

SHA-256 do trecho: `7b98458d275a18bae96fda460e4279db183e5f9b4d6fe7cec5ff8cdfd8a3e2d7`.

### evaluation:475444

Chamadas escritas diretamente neste corpo: `ANCHOR_ID_SET.has`.

SHA-256 do trecho: `7b98458d275a18bae96fda460e4279db183e5f9b4d6fe7cec5ff8cdfd8a3e2d7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
