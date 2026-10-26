# `estimateStringTokenCount`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/token-estimate.js` · [README do módulo](../../../../modules/agent-core/token-estimate-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476404-476406](../../../../../reference/runtime/host-main.cjs#L476404-L476406) | `FunctionDeclaration` | não | `str3` |
| [evaluation:255711-255713](../../../../../reference/runtime/sand-eval-runner.cjs#L255711-L255713) | `FunctionDeclaration` | não | `str3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476404-476406](../../../../../reference/runtime/host-main.cjs#L476404-L476406) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255711-255713](../../../../../reference/runtime/sand-eval-runner.cjs#L255711-L255713) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476404

Chamadas escritas diretamente neste corpo: `Math.round`.

SHA-256 do trecho: `6d90beeb134ba77e21a958797b3bd8140b3f69559d725eb406a1e5e47982839c`.

### evaluation:255711

Chamadas escritas diretamente neste corpo: `Math.round`.

SHA-256 do trecho: `6d90beeb134ba77e21a958797b3bd8140b3f69559d725eb406a1e5e47982839c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
