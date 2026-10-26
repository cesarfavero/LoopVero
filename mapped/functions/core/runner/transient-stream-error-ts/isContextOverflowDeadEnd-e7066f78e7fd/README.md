# `isContextOverflowDeadEnd`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736286-736288](../../../../../../reference/runtime/host-main.cjs#L736286-L736288) | `FunctionDeclaration` | não | `error64` |
| [evaluation:589978-589980](../../../../../../reference/runtime/sand-eval-runner.cjs#L589978-L589980) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736286-736288](../../../../../../reference/runtime/host-main.cjs#L736286-L736288) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:589978-589980](../../../../../../reference/runtime/sand-eval-runner.cjs#L589978-L589980) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736286

Chamadas escritas diretamente neste corpo: `hasContextOverflowDeadEndSignal`, `new Set`.

SHA-256 do trecho: `032c4f983c13224d9af5434bfff86966faddc949662e3374b2940410875683ed`.

### evaluation:589978

Chamadas escritas diretamente neste corpo: `hasContextOverflowDeadEndSignal`, `new Set`.

SHA-256 do trecho: `f5c4ec73cbe9161213f5d993f6a07be6cb52bc45339c037ad6617e10803e4041`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
