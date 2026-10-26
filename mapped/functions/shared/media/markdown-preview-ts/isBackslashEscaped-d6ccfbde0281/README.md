# `isBackslashEscaped`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/markdown-preview.ts` · [README do módulo](../../../../../modules/shared/media/markdown-preview-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721987-721991](../../../../../../reference/runtime/host-main.cjs#L721987-L721991) | `FunctionDeclaration` | não | `input2, index` |
| [evaluation:539964-539968](../../../../../../reference/runtime/sand-eval-runner.cjs#L539964-L539968) | `FunctionDeclaration` | não | `input2, index` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721987-721991](../../../../../../reference/runtime/host-main.cjs#L721987-L721991) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:539964-539968](../../../../../../reference/runtime/sand-eval-runner.cjs#L539964-L539968) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:721987

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `at3`, `backslashes`.

SHA-256 do trecho: `4e5a456af8bcb6ec5bb470baf16a2c87d08bcdda5c1caa5cd60fc2ae155e200b`.

### evaluation:539964

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `at3`, `backslashes`.

SHA-256 do trecho: `4e5a456af8bcb6ec5bb470baf16a2c87d08bcdda5c1caa5cd60fc2ae155e200b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
