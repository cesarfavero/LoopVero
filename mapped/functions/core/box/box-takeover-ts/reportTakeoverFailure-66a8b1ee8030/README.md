# `reportTakeoverFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-takeover.ts` · [README do módulo](../../../../../modules/core/box/box-takeover-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775980-775982](../../../../../../reference/runtime/host-main.cjs#L775980-L775982) | `FunctionDeclaration` | não | `errorClass` |
| [evaluation:575637-575639](../../../../../../reference/runtime/sand-eval-runner.cjs#L575637-L575639) | `FunctionDeclaration` | não | `errorClass` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775980-775982](../../../../../../reference/runtime/host-main.cjs#L775980-L775982) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:575637-575639](../../../../../../reference/runtime/sand-eval-runner.cjs#L575637-L575639) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:775980

Chamadas escritas diretamente neste corpo: `reportHostDiagnosticOrStderr`.

SHA-256 do trecho: `0274de036527f3e0f576bff375a5ab5f57dedbd733e38bf2cc8ff5a11eb16437`.

### evaluation:575637

Chamadas escritas diretamente neste corpo: `reportHostDiagnosticOrStderr`.

SHA-256 do trecho: `0274de036527f3e0f576bff375a5ab5f57dedbd733e38bf2cc8ff5a11eb16437`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
