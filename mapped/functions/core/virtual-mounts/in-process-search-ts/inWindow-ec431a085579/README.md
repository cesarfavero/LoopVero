# `inWindow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/virtual-mounts/in-process-search.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/in-process-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765974-765982](../../../../../../reference/runtime/host-main.cjs#L765974-L765982) | `FunctionDeclaration` | não | `doc, request5` |
| [evaluation:559338-559346](../../../../../../reference/runtime/sand-eval-runner.cjs#L559338-L559346) | `FunctionDeclaration` | não | `doc, request3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765974-765982](../../../../../../reference/runtime/host-main.cjs#L765974-L765982) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:559338-559346](../../../../../../reference/runtime/sand-eval-runner.cjs#L559338-L559346) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:765974

Chamadas escritas diretamente neste corpo: `isUnder`.

SHA-256 do trecho: `6efb8bd7a7deaa509d71d0ec1f612137aa808eaa2f2f8a9beecdb8d305c73259`.

### evaluation:559338

Chamadas escritas diretamente neste corpo: `isUnder`.

SHA-256 do trecho: `21169050130d2257e5b2efbfc0c87504a44b04ce59548b93aee35944264e2ccb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
