# `profileRoleFromJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/agents/agent-files.ts` · [README do módulo](../../../../../modules/core/agents/agent-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490831-490835](../../../../../../reference/runtime/host-main.cjs#L490831-L490835) | `FunctionDeclaration` | não | `parsed2` |
| [evaluation:629042-629046](../../../../../../reference/runtime/sand-eval-runner.cjs#L629042-L629046) | `FunctionDeclaration` | não | `parsed` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490831-490835](../../../../../../reference/runtime/host-main.cjs#L490831-L490835) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:629042-629046](../../../../../../reference/runtime/sand-eval-runner.cjs#L629042-L629046) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:490831

Chamadas escritas diretamente neste corpo: `parsed2.role.trim`.

SHA-256 do trecho: `6437a57f4067c1e9e6ac39cae632d5d92eb73e8d4e67cd4b56d3533ecc54be0b`.

### evaluation:629042

Chamadas escritas diretamente neste corpo: `parsed.role.trim`.

SHA-256 do trecho: `91510ff7a6f0a9685d8b77af69bfaa6b677222ea13bd28059c64f101b7c31351`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
