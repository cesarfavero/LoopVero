# `factRead`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/in-app-links-guidance.ts` · [README do módulo](../../../../../modules/core/runner/in-app-links-guidance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557655-557657](../../../../../../reference/runtime/host-main.cjs#L557655-L557657) | `FunctionDeclaration` | não | `facts, fact` |
| [evaluation:546102-546104](../../../../../../reference/runtime/sand-eval-runner.cjs#L546102-L546104) | `FunctionDeclaration` | não | `facts, fact` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557655-557657](../../../../../../reference/runtime/host-main.cjs#L557655-L557657) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546102-546104](../../../../../../reference/runtime/sand-eval-runner.cjs#L546102-L546104) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:557655

Chamadas escritas diretamente neste corpo: `isSandUiMapFactName`.

SHA-256 do trecho: `b35c603bd19cd91dab211411de92c496c095d7fdf0122e87c66dd07438a6d08e`.

### evaluation:546102

Chamadas escritas diretamente neste corpo: `isSandUiMapFactName`.

SHA-256 do trecho: `b35c603bd19cd91dab211411de92c496c095d7fdf0122e87c66dd07438a6d08e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
