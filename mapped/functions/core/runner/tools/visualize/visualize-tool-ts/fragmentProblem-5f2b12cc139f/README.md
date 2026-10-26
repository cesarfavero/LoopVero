# `fragmentProblem`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/visualize/visualize-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/visualize/visualize-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768548-768561](../../../../../../../../reference/runtime/host-main.cjs#L768548-L768561) | `FunctionDeclaration` | não | `{   html,   origin }` |
| [evaluation:564063-564076](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564063-L564076) | `FunctionDeclaration` | não | `{   html,   origin }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768548-768561](../../../../../../../../reference/runtime/host-main.cjs#L768548-L768561) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:564063-564076](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564063-L564076) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:768548

Chamadas escritas diretamente neste corpo: `.encode`, `THREE_CLASS_CALLED_WITHOUT_NEW.exec`, `html.trim`, `new TextEncoder`.

SHA-256 do trecho: `7352890a3c42e4e036cc932283376abbcc11252dd6317c2b2e1b84d2fb3eb32e`.

### evaluation:564063

Chamadas escritas diretamente neste corpo: `.encode`, `THREE_CLASS_CALLED_WITHOUT_NEW.exec`, `html.trim`, `new TextEncoder`.

SHA-256 do trecho: `7352890a3c42e4e036cc932283376abbcc11252dd6317c2b2e1b84d2fb3eb32e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
