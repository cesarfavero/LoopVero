# `formatDelegatedWorkLines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/sand-subagent-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781012-781019](../../../../../../../reference/runtime/host-main.cjs#L781012-L781019) | `FunctionDeclaration` | não | `delegated` |
| [evaluation:581359-581366](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581359-L581366) | `FunctionDeclaration` | não | `delegated` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781012-781019](../../../../../../../reference/runtime/host-main.cjs#L781012-L781019) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:581359-581366](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581359-L581366) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:781012

Chamadas escritas diretamente neste corpo: `delegated.filter`, `delegated.map`.

SHA-256 do trecho: `38104b0ac421023438684ebbc048317e64261ec0ddb53cbc42a53f35db137f5d`.

### evaluation:581359

Chamadas escritas diretamente neste corpo: `delegated.filter`, `delegated.map`.

SHA-256 do trecho: `54598fb3e0af9cce83512d578f4859530670560fb4cfd3ed6ec13c434f829c76`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
