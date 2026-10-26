# `adminLockRead`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/in-app-links-guidance.ts` · [README do módulo](../../../../../modules/core/runner/in-app-links-guidance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557670-557674](../../../../../../reference/runtime/host-main.cjs#L557670-L557674) | `FunctionDeclaration` | não | `row, facts` |
| [evaluation:546114-546118](../../../../../../reference/runtime/sand-eval-runner.cjs#L546114-L546118) | `FunctionDeclaration` | não | `row, facts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557670-557674](../../../../../../reference/runtime/host-main.cjs#L557670-L557674) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:546114-546118](../../../../../../reference/runtime/sand-eval-runner.cjs#L546114-L546118) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:557670

Chamadas escritas diretamente neste corpo: `isSandUiMapAdminPolicy`.

SHA-256 do trecho: `eec9c7bc89ebe2b01ba152e329b829974cfe23c486fa3bf467780975b6e592b5`.

### evaluation:546114

Chamadas escritas diretamente neste corpo: `isSandUiMapAdminPolicy`.

SHA-256 do trecho: `eec9c7bc89ebe2b01ba152e329b829974cfe23c486fa3bf467780975b6e592b5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
