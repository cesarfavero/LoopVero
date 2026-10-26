# `createLocalBrainDocsFs/readTree`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/brain-docs/local-brain-docs-fs.ts` · [README do módulo](../../../../../modules/core/brain-docs/local-brain-docs-fs-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784760-784764](../../../../../../reference/runtime/host-main.cjs#L784760-L784764) | `FunctionExpression` | sim | `roots` |
| [evaluation:630157-630161](../../../../../../reference/runtime/sand-eval-runner.cjs#L630157-L630161) | `FunctionExpression` | sim | `roots` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784760-784764](../../../../../../reference/runtime/host-main.cjs#L784760-L784764) | 0 | 1 | 1 | 1 | 0 | 0 |
| [evaluation:630157-630161](../../../../../../reference/runtime/sand-eval-runner.cjs#L630157-L630161) | 0 | 1 | 1 | 1 | 0 | 0 |

### host:784760

Chamadas escritas diretamente neste corpo: `collect`, `new Map`.

SHA-256 do trecho: `d22b1ce99b3a4bff023f11bd7a9e9767b26f3868d6f576d15b62a8db992db886`.

### evaluation:630157

Chamadas escritas diretamente neste corpo: `collect`, `new Map`.

SHA-256 do trecho: `d22b1ce99b3a4bff023f11bd7a9e9767b26f3868d6f576d15b62a8db992db886`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
