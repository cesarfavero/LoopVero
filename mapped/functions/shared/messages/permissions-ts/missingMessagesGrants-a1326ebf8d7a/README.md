# `missingMessagesGrants`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/messages/permissions.ts` · [README do módulo](../../../../../modules/shared/messages/permissions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:487331-487333](../../../../../../reference/runtime/host-main.cjs#L487331-L487333) | `FunctionDeclaration` | não | `permissions, grants` |
| [evaluation:577543-577545](../../../../../../reference/runtime/sand-eval-runner.cjs#L577543-L577545) | `FunctionDeclaration` | não | `permissions, grants` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487331-487333](../../../../../../reference/runtime/host-main.cjs#L487331-L487333) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577543-577545](../../../../../../reference/runtime/sand-eval-runner.cjs#L577543-L577545) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:487331

Chamadas escritas diretamente neste corpo: `grants.filter`.

SHA-256 do trecho: `d0bd3f1e79a96b50eb17358e2e3e90546d79f32c48c73203f232050f8d34ab92`.

### evaluation:577543

Chamadas escritas diretamente neste corpo: `grants.filter`.

SHA-256 do trecho: `d0bd3f1e79a96b50eb17358e2e3e90546d79f32c48c73203f232050f8d34ab92`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
