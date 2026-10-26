# `isVisualId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `shared/ids.ts` · [README do módulo](../../../../modules/shared/ids-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476779-476781](../../../../../reference/runtime/host-main.cjs#L476779-L476781) | `FunctionDeclaration` | não | `raw` |
| [evaluation:475391-475393](../../../../../reference/runtime/sand-eval-runner.cjs#L475391-L475393) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476779-476781](../../../../../reference/runtime/host-main.cjs#L476779-L476781) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475391-475393](../../../../../reference/runtime/sand-eval-runner.cjs#L475391-L475393) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476779

Chamadas escritas diretamente neste corpo: `/^viz-[0-9a-f]{1,64}$/.test`.

SHA-256 do trecho: `b28ff62c496b291e97e94dfb099bd814a332d6c29ca2378c0731c6d8becc2f1c`.

### evaluation:475391

Chamadas escritas diretamente neste corpo: `/^viz-[0-9a-f]{1,64}$/.test`.

SHA-256 do trecho: `b28ff62c496b291e97e94dfb099bd814a332d6c29ca2378c0731c6d8becc2f1c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
