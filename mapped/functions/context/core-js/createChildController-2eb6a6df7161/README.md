# `createChildController`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/core.js` · [README do módulo](../../../../modules/context/core-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225258-225273](../../../../../reference/runtime/host-main.cjs#L225258-L225273) | `FunctionDeclaration` | não | `parentSignal` |
| [evaluation:1746-1761](../../../../../reference/runtime/sand-eval-runner.cjs#L1746-L1761) | `FunctionDeclaration` | não | `parentSignal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225258-225273](../../../../../reference/runtime/host-main.cjs#L225258-L225273) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:1746-1761](../../../../../reference/runtime/sand-eval-runner.cjs#L1746-L1761) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:225258

Chamadas escritas diretamente neste corpo: `controller.abort`, `new AbortController`, `parentSignal.addEventListener`.

SHA-256 do trecho: `f3ff02d747c724090e487e2177f3a46a529bcea4fc21004eb823008f74678c5a`.

### evaluation:1746

Chamadas escritas diretamente neste corpo: `controller.abort`, `new AbortController`, `parentSignal.addEventListener`.

SHA-256 do trecho: `f3ff02d747c724090e487e2177f3a46a529bcea4fc21004eb823008f74678c5a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
