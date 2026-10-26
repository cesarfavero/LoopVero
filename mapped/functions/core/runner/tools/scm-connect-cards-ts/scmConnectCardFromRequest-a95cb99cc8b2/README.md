# `scmConnectCardFromRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/scm-connect-cards.ts` · [README do módulo](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509235-509244](../../../../../../../reference/runtime/host-main.cjs#L509235-L509244) | `FunctionDeclaration` | não | `args` |
| [evaluation:556960-556969](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556960-L556969) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509235-509244](../../../../../../../reference/runtime/host-main.cjs#L509235-L509244) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556960-556969](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556960-L556969) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:509235

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `args.repo.trim`.

SHA-256 do trecho: `92cec7b1d15c3559348f1cbbb62cf7ae7518a54ac326207e09c916fe905fcdb9`.

### evaluation:556960

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `args.repo.trim`.

SHA-256 do trecho: `92cec7b1d15c3559348f1cbbb62cf7ae7518a54ac326207e09c916fe905fcdb9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
