# `getSpan2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/otel.js` · [README do módulo](../../../../modules/context/otel-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225813-225815](../../../../../reference/runtime/host-main.cjs#L225813-L225815) | `FunctionDeclaration` | não | `ctx` |
| [evaluation:2301-2303](../../../../../reference/runtime/sand-eval-runner.cjs#L2301-L2303) | `FunctionDeclaration` | não | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225813-225815](../../../../../reference/runtime/host-main.cjs#L225813-L225815) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:2301-2303](../../../../../reference/runtime/sand-eval-runner.cjs#L2301-L2303) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225813

Chamadas escritas diretamente neste corpo: `ctx.get`.

SHA-256 do trecho: `bdfb726b2e405a00213e1aa6dce7c2487ddb03ecde1ca3a67e3fd24d6842867f`.

### evaluation:2301

Chamadas escritas diretamente neste corpo: `ctx.get`.

SHA-256 do trecho: `bdfb726b2e405a00213e1aa6dce7c2487ddb03ecde1ca3a67e3fd24d6842867f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
