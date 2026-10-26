# `isSandUiMapFactName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/in-app-links-guidance.ts` · [README do módulo](../../../../../modules/core/runner/in-app-links-guidance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557643-557645](../../../../../../reference/runtime/host-main.cjs#L557643-L557645) | `FunctionDeclaration` | não | `name18` |
| [evaluation:546090-546092](../../../../../../reference/runtime/sand-eval-runner.cjs#L546090-L546092) | `FunctionDeclaration` | não | `name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557643-557645](../../../../../../reference/runtime/host-main.cjs#L557643-L557645) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546090-546092](../../../../../../reference/runtime/sand-eval-runner.cjs#L546090-L546092) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557643

Chamadas escritas diretamente neste corpo: `FACT_NAMES.has`.

SHA-256 do trecho: `b35b08d49a21161419d9284ba8f006ae5e9df3640a96f7bc97a2908086a03e26`.

### evaluation:546090

Chamadas escritas diretamente neste corpo: `FACT_NAMES.has`.

SHA-256 do trecho: `b35b08d49a21161419d9284ba8f006ae5e9df3640a96f7bc97a2908086a03e26`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
