# `createContext`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/core.js` · [README do módulo](../../../../modules/context/core-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225274-225276](../../../../../reference/runtime/host-main.cjs#L225274-L225276) | `FunctionDeclaration` | não | `(nenhum)` |
| [evaluation:1762-1764](../../../../../reference/runtime/sand-eval-runner.cjs#L1762-L1764) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225274-225276](../../../../../reference/runtime/host-main.cjs#L225274-L225276) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:1762-1764](../../../../../reference/runtime/sand-eval-runner.cjs#L1762-L1764) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225274

Chamadas escritas diretamente neste corpo: `new ContextImpl`.

SHA-256 do trecho: `a5134fa238715c0c54761f1028288baff597e1602851228790e99e57ba4225ba`.

### evaluation:1762

Chamadas escritas diretamente neste corpo: `new ContextImpl`.

SHA-256 do trecho: `a5134fa238715c0c54761f1028288baff597e1602851228790e99e57ba4225ba`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
