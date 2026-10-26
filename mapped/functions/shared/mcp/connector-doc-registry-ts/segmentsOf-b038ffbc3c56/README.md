# `segmentsOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773960-773962](../../../../../../reference/runtime/host-main.cjs#L773960-L773962) | `FunctionDeclaration` | não | `url2` |
| [evaluation:573175-573177](../../../../../../reference/runtime/sand-eval-runner.cjs#L573175-L573177) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773960-773962](../../../../../../reference/runtime/host-main.cjs#L773960-L773962) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573175-573177](../../../../../../reference/runtime/sand-eval-runner.cjs#L573175-L573177) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:773960

Chamadas escritas diretamente neste corpo: `.filter`, `url2.pathname.split`.

SHA-256 do trecho: `4ce032777287e3461909c0afa80ab03b3dabcc125824f9491c43731129a7feab`.

### evaluation:573175

Chamadas escritas diretamente neste corpo: `.filter`, `url2.pathname.split`.

SHA-256 do trecho: `4ce032777287e3461909c0afa80ab03b3dabcc125824f9491c43731129a7feab`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
