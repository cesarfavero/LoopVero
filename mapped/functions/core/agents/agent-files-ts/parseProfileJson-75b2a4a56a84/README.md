# `parseProfileJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/agents/agent-files.ts` · [README do módulo](../../../../../modules/core/agents/agent-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490803-490812](../../../../../../reference/runtime/host-main.cjs#L490803-L490812) | `FunctionDeclaration` | não | `raw` |
| [evaluation:629014-629023](../../../../../../reference/runtime/sand-eval-runner.cjs#L629014-L629023) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490803-490812](../../../../../../reference/runtime/host-main.cjs#L490803-L490812) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:629014-629023](../../../../../../reference/runtime/sand-eval-runner.cjs#L629014-L629023) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:490803

Chamadas escritas diretamente neste corpo: `JSON.parse`.

Alvos de atribuição ou incremento: `parsed2`.

SHA-256 do trecho: `82e07ab6ecfc4b6960578f25e5cd8fc3e71cf7650d0c7e46a8c4b37a42da8093`.

### evaluation:629014

Chamadas escritas diretamente neste corpo: `JSON.parse`.

Alvos de atribuição ou incremento: `parsed`.

SHA-256 do trecho: `9a7b1da50c49d874679b3ca5213d23e9cbeb3087f2ed5a2c5551513081226c09`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
