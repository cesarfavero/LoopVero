# `../packages/context/dist/core.js/_ContextImpl.get`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/core.js` · [README do módulo](../../../../modules/context/core-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225309-225317](../../../../../reference/runtime/host-main.cjs#L225309-L225317) | `method` | não | `key` |
| [evaluation:1797-1805](../../../../../reference/runtime/sand-eval-runner.cjs#L1797-L1805) | `method` | não | `key` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225309-225317](../../../../../reference/runtime/host-main.cjs#L225309-L225317) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:1797-1805](../../../../../reference/runtime/sand-eval-runner.cjs#L1797-L1805) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:225309

Chamadas escritas diretamente neste corpo: `this.parent.get`, `this.values.get`, `this.values.has`.

SHA-256 do trecho: `2bd5781fd173c65c07a9e6ddc9e4c396c320b7282346f8fb971dc36514bc9c52`.

### evaluation:1797

Chamadas escritas diretamente neste corpo: `this.parent.get`, `this.values.get`, `this.values.has`.

SHA-256 do trecho: `2bd5781fd173c65c07a9e6ddc9e4c396c320b7282346f8fb971dc36514bc9c52`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
