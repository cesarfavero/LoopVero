# `normalizedPublishFolder`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-publish-proposals.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-publish-proposals-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509404-509407](../../../../../../reference/runtime/host-main.cjs#L509404-L509407) | `FunctionDeclaration` | não | `projectDir` |
| [evaluation:490304-490307](../../../../../../reference/runtime/sand-eval-runner.cjs#L490304-L490307) | `FunctionDeclaration` | não | `projectDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509404-509407](../../../../../../reference/runtime/host-main.cjs#L509404-L509407) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:490304-490307](../../../../../../reference/runtime/sand-eval-runner.cjs#L490304-L490307) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:509404

Chamadas escritas diretamente neste corpo: `.filter`, `.split`, `segments.join`.

SHA-256 do trecho: `8a69623713f89bc49ec14f3724e360a76650ff358835d752924b4c65e7154e61`.

### evaluation:490304

Chamadas escritas diretamente neste corpo: `.filter`, `.split`, `segments.join`.

SHA-256 do trecho: `8a69623713f89bc49ec14f3724e360a76650ff358835d752924b4c65e7154e61`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
