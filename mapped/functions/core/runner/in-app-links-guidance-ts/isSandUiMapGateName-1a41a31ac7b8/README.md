# `isSandUiMapGateName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/in-app-links-guidance.ts` · [README do módulo](../../../../../modules/core/runner/in-app-links-guidance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557640-557642](../../../../../../reference/runtime/host-main.cjs#L557640-L557642) | `FunctionDeclaration` | não | `name18` |
| [evaluation:546087-546089](../../../../../../reference/runtime/sand-eval-runner.cjs#L546087-L546089) | `FunctionDeclaration` | não | `name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557640-557642](../../../../../../reference/runtime/host-main.cjs#L557640-L557642) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546087-546089](../../../../../../reference/runtime/sand-eval-runner.cjs#L546087-L546089) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557640

Chamadas escritas diretamente neste corpo: `GATE_NAMES.has`.

SHA-256 do trecho: `79c616beed0b2b02e8eb0b9e211fed3e0f904389c582705b5bbf813c7f52b419`.

### evaluation:546087

Chamadas escritas diretamente neste corpo: `GATE_NAMES.has`.

SHA-256 do trecho: `79c616beed0b2b02e8eb0b9e211fed3e0f904389c582705b5bbf813c7f52b419`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
