# `factHolds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/in-app-links-guidance.ts` · [README do módulo](../../../../../modules/core/runner/in-app-links-guidance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557658-557660](../../../../../../reference/runtime/host-main.cjs#L557658-L557660) | `FunctionDeclaration` | não | `facts, fact` |
| [evaluation:546105-546107](../../../../../../reference/runtime/sand-eval-runner.cjs#L546105-L546107) | `FunctionDeclaration` | não | `facts, fact` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557658-557660](../../../../../../reference/runtime/host-main.cjs#L557658-L557660) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546105-546107](../../../../../../reference/runtime/sand-eval-runner.cjs#L546105-L546107) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557658

Chamadas escritas diretamente neste corpo: `factRead`.

SHA-256 do trecho: `db206c146569f54acc52f7939d2a2aa412b71993e63f516e24b5626e4386982c`.

### evaluation:546105

Chamadas escritas diretamente neste corpo: `factRead`.

SHA-256 do trecho: `db206c146569f54acc52f7939d2a2aa412b71993e63f516e24b5626e4386982c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
