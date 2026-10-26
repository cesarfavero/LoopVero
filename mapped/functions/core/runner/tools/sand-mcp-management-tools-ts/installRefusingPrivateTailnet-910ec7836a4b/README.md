# `installRefusingPrivateTailnet`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780068-780079](../../../../../../../reference/runtime/host-main.cjs#L780068-L780079) | `FunctionDeclaration` | sim | `install` |
| [evaluation:580313-580324](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580313-L580324) | `FunctionDeclaration` | sim | `install` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780068-780079](../../../../../../../reference/runtime/host-main.cjs#L780068-L780079) | 1 | 0 | 1 | 2 | 1 | 1 |
| [evaluation:580313-580324](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580313-L580324) | 1 | 0 | 1 | 2 | 1 | 1 |

### host:780068

Chamadas escritas diretamente neste corpo: `install`, `tailnetPluginInstallRefusalOf`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `b4ae7a3ad8d30db809189a3125054c217e3ed97bbee61bffca16fb65d25c0635`.

### evaluation:580313

Chamadas escritas diretamente neste corpo: `install`, `tailnetPluginInstallRefusalOf`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `a65f0ab4b7116849fee05598797a65cac30ac6f2c4578b2d1dbf36655511e763`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
