# `../packages/context/dist/core.js/_ContextImpl.withDeadline`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/core.js` · [README do módulo](../../../../modules/context/core-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225339-225347](../../../../../reference/runtime/host-main.cjs#L225339-L225347) | `method` | não | `deadline` |
| [evaluation:1827-1835](../../../../../reference/runtime/sand-eval-runner.cjs#L1827-L1835) | `method` | não | `deadline` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225339-225347](../../../../../reference/runtime/host-main.cjs#L225339-L225347) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:1827-1835](../../../../../reference/runtime/sand-eval-runner.cjs#L1827-L1835) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:225339

Chamadas escritas diretamente neste corpo: `Date.now`, `controller.abort`, `createChildController`, `deadline.getTime`, `new Error`, `new _ContextImpl`, `this.withTimeout`.

SHA-256 do trecho: `b4820c3d5086ceeead798f7be465612fb3df4f743d49ad43444238a4b5f6d7bc`.

### evaluation:1827

Chamadas escritas diretamente neste corpo: `Date.now`, `controller.abort`, `createChildController`, `deadline.getTime`, `new Error`, `new _ContextImpl`, `this.withTimeout`.

SHA-256 do trecho: `b4820c3d5086ceeead798f7be465612fb3df4f743d49ad43444238a4b5f6d7bc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
