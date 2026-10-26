# `../packages/context/dist/core.js/_ContextImpl.with`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/core.js` · [README do módulo](../../../../modules/context/core-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225318-225322](../../../../../reference/runtime/host-main.cjs#L225318-L225322) | `method` | não | `key, value` |
| [evaluation:1806-1810](../../../../../reference/runtime/sand-eval-runner.cjs#L1806-L1810) | `method` | não | `key, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225318-225322](../../../../../reference/runtime/host-main.cjs#L225318-L225322) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:1806-1810](../../../../../reference/runtime/sand-eval-runner.cjs#L1806-L1810) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225318

Chamadas escritas diretamente neste corpo: `new Map`, `new _ContextImpl`, `newValues.set`.

SHA-256 do trecho: `983c0c96072157c1b7c569288c94821f8eaef1c70635ecfcf3c5adbec092546b`.

### evaluation:1806

Chamadas escritas diretamente neste corpo: `new Map`, `new _ContextImpl`, `newValues.set`.

SHA-256 do trecho: `983c0c96072157c1b7c569288c94821f8eaef1c70635ecfcf3c5adbec092546b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
