# `routeGuidance2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/in-app-links-guidance.ts` · [README do módulo](../../../../../modules/core/runner/in-app-links-guidance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557725-557734](../../../../../../reference/runtime/host-main.cjs#L557725-L557734) | `FunctionDeclaration` | não | `taught, tabs` |
| [evaluation:546161-546170](../../../../../../reference/runtime/sand-eval-runner.cjs#L546161-L546170) | `FunctionDeclaration` | não | `taught, tabs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557725-557734](../../../../../../reference/runtime/host-main.cjs#L557725-L557734) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546161-546170](../../../../../../reference/runtime/sand-eval-runner.cjs#L546161-L546170) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557725

Chamadas escritas diretamente neste corpo: `routeTemplate2`, `tabs.join`, `taught.join`.

SHA-256 do trecho: `206beacb06462bd54d704c9ec24e4500af1cbf6fe27469631c379eede3588bbf`.

### evaluation:546161

Chamadas escritas diretamente neste corpo: `routeTemplate2`, `tabs.join`, `taught.join`.

SHA-256 do trecho: `206beacb06462bd54d704c9ec24e4500af1cbf6fe27469631c379eede3588bbf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
